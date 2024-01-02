import { DataGrid, GridColDef } from "@mui/x-data-grid";
import SkillSlice from "./SkillSlice";

const columns: GridColDef[] = [
  {
    field: "fullName",
    headerName: "Ad Soyad",
    width: 200,
    renderCell: (params) => (
      <div>
        <p>{params.value}</p>
      </div>
    ),
  },
  {
    field: "yetkinlik1",
    headerName: "Yetkinlik 1",
    width: 200,
    renderCell: (params) => (
      <div>
        <p>{params.value}</p>
      </div>
    ),
  },
  {
    field: "yetkinlik2",
    headerName: "Yetkinlik 2",
    width: 200,
    renderCell: (params) => (
      <div>
        <p>{params.value}</p>
      </div>
    ),
  },
  {
    field: "yetkinlik3",
    headerName: "Yetkinlik 3",
    width: 200,
    renderCell: (params) => (
      <div>
        <p>{params.value}</p>
      </div>
    ),
  },
];

const rows = [
  {
    id: 1,
    fullName: "Emir Çavdar",
    yetkinlik1: <SkillSlice target={5} real={3} />,
    yetkinlik2: <SkillSlice target={4} real={3} />,
    yetkinlik3: <SkillSlice target={7} real={3} />,
  },
  {
    id: 2,
    fullName: "Yusuf Ali Selek",
    yetkinlik1: <SkillSlice target={6} real={4} />,
    yetkinlik2: <SkillSlice target={3} real={3} />,
    yetkinlik3: <SkillSlice target={2} real={1} />,
  },
  {
    id: 3,
    fullName: "Betül Bayram",
    yetkinlik1: <SkillSlice target={6} real={5} />,
    yetkinlik2: <SkillSlice target={8} real={6} />,
    yetkinlik3: <SkillSlice target={4} real={1} />,
  },
];

export default function Grid() {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
    />
  );
}
