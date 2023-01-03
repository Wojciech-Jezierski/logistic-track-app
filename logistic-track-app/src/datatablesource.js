export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "Użytkownik",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "displayName",
    headerName: "Imię i nazwisko",
    width: 200,
  },
  {
    field: "Type_of_worker",
    headerName: "Typ pracownika",
    width: 200,
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
  {
    field: "phone",
    headerName: "Telefon",
    width: 200,
  },
];