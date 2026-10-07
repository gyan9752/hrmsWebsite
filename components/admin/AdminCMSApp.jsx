'use client';

import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import '@/components/admin/index.css';
import 'react-quill-new/dist/quill.snow.css';

import AppRoutes from '@/components/admin/routes/AppRoutes';
import { appStore } from '@/components/admin/app/store';

export default function AdminCMSApp() {
  return (
    <Provider store={appStore}>
      <Router basename="/admin">
        <Toaster position="top-center" />
        <AppRoutes />
      </Router>
    </Provider>
  );
}
