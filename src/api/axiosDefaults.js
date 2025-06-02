import axios from 'axios'

const TEST_MODE = true;

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  withCredentials: true,
})

const mockCalendarSummary = [
  { date: "2025-06-01", income: "100.00", expenditure: "50.00", currency_symbol: "£" },
  { date: "2025-06-02", income: "75.00", expenditure: "40.00", currency_symbol: "£" },
];

const mockIncomes = [
  { id: 1, title: "Salary", amount: 10000, date: "2025-06-01", repeated: "NEVER" },
];

const mockExpenditures = [
  { id: 1, title: "Rent", amount: 5000, date: "2025-06-01", repeated: "MONTHLY", type: "BILL" },
];

// ===== MOCK BEHAVIOR =====
if (TEST_MODE) {
  // Intercept GET requests
  api.get = async (url) => {
    if (url.startsWith('/calendar-summary')) {
      return { data: mockCalendarSummary };
    }
    if (url.startsWith('/income')) {
      return { data: mockIncomes };
    }
    if (url.startsWith('/expenditures')) {
      return { data: mockExpenditures };
    }
    return { data: [] }; // fallback
  };

  // Intercept POST (login/logout etc.)
  api.post = async (url) => {
    return { data: { success: true } };
  };

  // Intercept PUT, PATCH, DELETE
  api.put = async () => ({ data: { success: true } });
  api.patch = async () => ({ data: { success: true } });
  api.delete = async () => ({ data: { success: true } });
}


// Automatically refresh the token if access is expired
//api.interceptors.response.use( // Registers a response interceptor.
//  (response) => response, // If the response is successful, just pass it through unchanged.
//  async (error) => {
//    const originalRequest = error.config // If there's an error, extract the original request config

    // Check if token expired and not already retried
//    if (
//      error.response.status === 401 &&
//      !originalRequest._retry &&
//      !originalRequest.url.includes('/dj-rest-auth/login/') &&
//     !originalRequest.url.includes('/dj-rest-auth/token/refresh/')
//    ) {
//     originalRequest._retry = true; // Flags this request so if it fails again, we don’t retry it a second time.
      
//      try {
//        // Attempt to refresh token
//        await api.post('/dj-rest-auth/token/refresh/')
 //       // Retry original request
//        return api(originalRequest)
//      } catch (refreshError) {
//        return Promise.reject(refreshError)
//      }
//    }

//    return Promise.reject(error)
//  }
//)

export default api
