import { MyReservation } from "./pages/MyReservation";
import { ReservationDetail } from "./pages/ReservationDetail";
import { TablePage } from "./pages/TablePage";
import { TableType } from "./pages/TableType";
import { GetReservationDetail } from "./pages/GetReservationDetail";
import { CreateTable1 } from "./pages/CreateTable1";
import { CreateTable2 } from "./pages/CreateTable2";

export const Feature06Routes = () => {
  return [
    { path: "/venue/:venueId/reserve", element: "ElementPlaceHolder" }, //page for choosing the table type
    {
      path: "/venue/:venueId/reserve/:reserveId",
      element: "ElementPlaceHolder",
    }, //page for choose the reservation details (date, time, etc.)
    { path: "/check-in", element: "ElementPlaceHolder" },
    { path: "/my-reservation", element: <MyReservation /> },
    { path: "/table", element: <TablePage /> },
    { path: "/tabletype", element: <TableType /> },
    // { path: "/dashboard", element: <Dashboard /> },
    { path: "/reservation-detail", element: <ReservationDetail /> },
    { path: "/getreservation-detail", element: <GetReservationDetail /> },
  ];
};
