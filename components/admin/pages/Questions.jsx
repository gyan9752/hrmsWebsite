import {
  styled,
  Paper,
  Typography,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Tooltip,
  CircularProgress,
  Dialog,
  Pagination,
} from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Link } from "react-router-dom";
import ReplyAllOutlinedIcon from "@mui/icons-material/ReplyAllOutlined";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import {
  useDeleteQuestionByIdMutation,
  useGetAllQuestionsQuery,
  useGetQuestionByIdQuery,
} from "../features/api/questionApi";

const tableHeadItems = [
  "Name",
  "Email",
  "Contact Number",
  "Remark",
  "Created At",
  "Actions",
];

const Questions = () => {
  const [openDialogBox, setOpenDialogBox] = useState(false);
  const [openDialogViewBox, setOpenDialogViewBox] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedId, setSelectedId] = useState(null);


  const token = localStorage.getItem("authToken");

  const questionId = localStorage.getItem("questionId");

  const { data, isError, isLoading, error, refetch } = useGetAllQuestionsQuery({
    token,
    page,
  });

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const resultPerPage = data?.limit || 0;
  const contactCounts = data?.total || 0;
  const currentPage = page;

  const [
    deleteQuestionById,
    {
      data: deleteData,
      isLoading: deleteLoading,
      isError: deleteIsError,
      isSuccess: deleteIsSuccess,
      error: deleteError,
    },
  ] = useDeleteQuestionByIdMutation();

  const { data: contactDetails, isLoading: questionsLoading } =
    useGetQuestionByIdQuery({
      id: questionId,
      token,
    });

  console.log("contactdetails", contactDetails);

  const handlDialogBoxOpen = (id) => {
    setOpenDialogBox(true);
    localStorage.setItem("questionId", id);
  };
  const handlDialogViewBoxOpen = (id) => {
    setOpenDialogViewBox(true);
    localStorage.setItem("questionId", id);
  };

  const handleDialogClose = () => {
    setOpenDialogBox(!openDialogBox);
  };
  const handleDialogViewClose = () => {
    setOpenDialogViewBox(!openDialogViewBox);
  };

  const handleDelete = async () => {
    const questionId = localStorage.getItem("questionId");
    const userToken = localStorage.getItem("authToken");
    try {
      await deleteQuestionById({ id: questionId, token: userToken });
    } catch (error) {
      console.log(error);
      toast.error(deleteError?.data?.message || "Something Went Wrong");
    }
  };

  useEffect(() => {
    if (isError && error) {
      toast.error(error?.data?.message || "Something went wrong");
    }
  }, [isError, error]);

  useEffect(() => {
    if (deleteIsError && deleteError) {
      toast.error(deleteError?.data?.message || "Something Went Wrong");
    }
    if (deleteIsSuccess && deleteData) {
      toast.success(
        deleteData?.message || "Contact has been successfully deleted"
      );
      setOpenDialogBox(false);
      refetch();
    }
  }, [deleteError, deleteIsError, deleteIsSuccess, deleteData]);

  return (
    <>
      <CategoryMainContainer>
        <SectionOne>
          <CategoryTypography variant="body1">
            Tech Training Questions
          </CategoryTypography>
          <Tooltip title="back to previous page">
            <IconButton
              onClick={() => window.history.back()}
              style={{ marginRight: "120px" }}
            >
              <ReplyAllOutlinedIcon />
            </IconButton>
          </Tooltip>
        </SectionOne>
        {isLoading ? (
          <div className="loader">
            <CircularProgress size={50} sx={{ color: "black" }} />
          </div>
        ) : (
          <TableContainer component={Paper} sx={{ boxShadow: 10 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: "#f5f5f5" }}>
                  {tableHeadItems &&
                    tableHeadItems.map((curItem, i) => {
                      return (
                        <ContenTableCell
                          sx={{ width: { xs: "40px", lg: "60px" } }}
                        >
                          {curItem}
                        </ContenTableCell>
                      );
                    })}
                </TableRow>
              </TableHead>

              <TableBody>
                {data?.questions.length > 0 ? (
                  data?.questions?.map((curContact, index) => (
                    <TableRow
                      key={curContact._id || index}
                      hover
                      sx={{
                        backgroundColor: index % 2 !== 0 ? "#f9f9f9" : "#fff",
                      }}
                    >
                      <TableCell sx={{ width: "110px" }}>
                        {curContact?.name || "N/A"}
                      </TableCell>
                      <TableCell>{curContact?.email || "N/A"}</TableCell>
                      <TableCell> +91 {curContact?.mobile || "N/A"}</TableCell>
                      <TableCell sx={{ width: "150px" }}>
                        {curContact?.remark || "N/A"}
                      </TableCell>

                      <TableCell>
                        {new Date(curContact.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <IconButton
                          onClick={() => handlDialogViewBoxOpen(curContact._id)}
                          color="success"
                        >
                          <Tooltip title="view this question">
                            <VisibilityOutlinedIcon />
                          </Tooltip>
                        </IconButton>
                        <IconButton
                          onClick={() => handlDialogBoxOpen(curContact._id)}
                          color="error"
                        >
                          <Tooltip title="Delete this question">
                            <DeleteOutlinedIcon />
                          </Tooltip>
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} align="center">
                      <Typography>No Tech Training Questions found</Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        <LastSection>
          <Typography>
            Showing {data?.questions.length} of {contactCounts} Questions
          </Typography>

          {resultPerPage < contactCounts && (
            <Pagination
              count={Math.ceil(contactCounts / resultPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              shape="rounded"
              size="large"
            />
          )}
        </LastSection>
      </CategoryMainContainer>
      <Dialog onClose={handleDialogClose} fullWidth open={openDialogBox}>
        <DialogContentContainer>
          <DialogSectionOne>
            <ErrorOutlineRoundedIcon sx={{ fontSize: "100px" }} color="error" />
            <SureText>Are you sure ?</SureText>
            <WarnText>
              This Action will be permanently delete the Profile Data
            </WarnText>
          </DialogSectionOne>
          <DialogSectionTwo>
            <Button
              disabled={deleteLoading}
              onClick={handleDelete}
              variant="contained"
              color="error"

            >
              {deleteLoading ? (
                <div className="circularProgress">
                  <CircularProgress size={20} /> Deleting...
                </div>
              ) : (
                "Delete"
              )}
            </Button>
            <Button
              sx={{ color: "black", border: "1px solid black" }}
              variant="outlined"
              onClick={handleDialogClose}
            >
              Cancel
            </Button>
          </DialogSectionTwo>
        </DialogContentContainer>
      </Dialog>
      <Dialog
        fullWidth
        open={openDialogViewBox}
        onClose={handleDialogViewClose}
      >
        <DialogViewContactContainer>
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: "Montserrat",
              fontWeight: 500,
              mb: 2,
            }}
          >
            Tech Training Question of {contactDetails?.name}
          </Typography>

          {questionsLoading && <CircularProgress size={20} />}

          <Typography sx={{ fontFamily: "Montserrat" }}>
            <strong>Name</strong> : {contactDetails?.name}
          </Typography>
          <Typography sx={{ fontFamily: "Montserrat" }}>
            <strong>Email</strong> : {contactDetails?.email}
          </Typography>
          <Typography sx={{ fontFamily: "Montserrat" }}>
            <strong>Phone</strong> : +91 {contactDetails?.mobile}
          </Typography>
          <Typography sx={{ fontFamily: "Montserrat" }}>
            <strong>Course</strong> : {contactDetails?.remark}
          </Typography>
        </DialogViewContactContainer>
      </Dialog>
    </>
  );
};

export default Questions;

const CategoryMainContainer = styled("div")`
  width: 100%;
  height: auto;
  // background-color: #ebebeb;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  @media (max-width: 600px) {
    width: 100vw;
  }
`;

const SectionOne = styled("div")`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 25px;
    height: auto;
    padding-bottom: 10px;
  }
`;

const CategoryTypography = styled(Typography)`
  font: 600 22px Montserrat;
  color: #000000;
`;

const ContenTableCell = styled(TableCell)`
  font: 600 15px Montserrat;
  color: rgb(140, 125, 125);
`;

const DialogViewContactContainer = styled("div")`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;

  @media (max-width: 100vw) {
    width: 100%;
  }
`;
const DialogSectionOne = styled("div")`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;
`;
const DialogSectionTwo = styled("div")`
  width: 100%;

  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: center;
`;
const DialogContentContainer = styled("div")`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;

  @media (max-width: 100vw) {
    width: 100%;
  }
`;

const SureText = styled("p")`
  font: 600 18px Montserrat;
  color: #000000;
`;

const WarnText = styled("p")`
  font: 300 16px Montserrat;
  color: #000000;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

const LastSection = styled("div")`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
