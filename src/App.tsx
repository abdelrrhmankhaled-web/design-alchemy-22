import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/useAuth";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import SiteLayout from "@/components/site/SiteLayout";
import Index from "./pages/Index.tsx";
import Auth from "./pages/Auth.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import CoursesPage from "./pages/CoursesPage.tsx";
import PathsPage from "./pages/PathsPage.tsx";
import WorkshopsPage from "./pages/WorkshopsPage.tsx";
import InstructorsPage from "./pages/InstructorsPage.tsx";
import BlogPage from "./pages/BlogPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import AssessmentPage from "./pages/AssessmentPage.tsx";
import CourseDetailPage from "./pages/CourseDetailPage.tsx";
import BookingPage from "./pages/BookingPage.tsx";
import NotFound from "./pages/NotFound.tsx";
import { Analytics } from "@vercel/analytics/react";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route element={<SiteLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/paths" element={<PathsPage />} />
              <Route path="/workshops" element={<WorkshopsPage />} />
              <Route path="/instructors" element={<InstructorsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/assessment" element={<AssessmentPage />} />
              <Route path="/course/:slug" element={<CourseDetailPage />} />
              <Route path="/booking" element={<BookingPage />} />
            </Route>
            <Route path="/auth" element={<Auth />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
