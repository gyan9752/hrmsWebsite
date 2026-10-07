import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useState } from "react";

// Keep the slice definition so Redux store initialization doesn't break
export const questionApi = createApi({
  reducerPath: "questionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  endpoints: (builder) => ({
    dummy: builder.query({ query: () => "/" }),
  }),
});

const DEFAULT_QUESTIONS = [
  {
    _id: "q_1",
    question: "What is your return policy?",
    answer: "We offer a 30-day money-back guarantee.",
    createdAt: new Date().toISOString(),
  }
];

export const useGetAllQuestionsQuery = () => {
  const [questions, setQuestions] = useState(DEFAULT_QUESTIONS);
  return {
    data: { data: questions, total: questions.length },
    isLoading: false,
    isSuccess: true,
    isError: false,
  };
};

export const useDeleteQuestionByIdMutation = () => {
  const mutate = async () => {
    return { data: { message: "Question deleted successfully" } };
  };
  return [mutate, { isLoading: false, isSuccess: true }];
};

export const useGetQuestionByIdQuery = ({ id }) => {
  const question = DEFAULT_QUESTIONS.find((q) => q._id === id);
  return {
    data: question ? { data: question } : null,
    isLoading: false,
    isSuccess: true,
  };
};
