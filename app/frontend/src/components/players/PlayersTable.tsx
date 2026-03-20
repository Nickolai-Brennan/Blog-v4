import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  type ColumnDef,
} from '@tanstack/react-table';
import type { Player } from '@/types/player';
import { playerColumnHelper, formatDate } from '@/lib/table/columnHelpers';

const columns: ColumnDef<Player>[] = [
  playerColumnHelper.accessor('id', { header: 'ID' }),
  playerColumnHelper.accessor('name', { header: 'Name' }),
  playerColumnHelper.accessor('position', { header: 'Position' }),
  playerColumnHelper.accessor('team_id', {
    header: 'Team ID',
    cell: (info) => info.getValue() ?? '—',
  }),
  playerColumnHelper.accessor('created_at', {
    header: 'Created',
    cell: (info) => formatDate(info.getValue()),
  }),
];

interface PlayersTableProps {
  data: Player[];
}

export function PlayersTable({ data }: PlayersTableProps) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          {table.getHeaderGroups().map((hg) => (
            <tr key={hg.id}>
              {hg.headers.map((header) => (
                <th
                  key={header.id}
                  style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left' }}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} style={{ border: '1px solid #ccc', padding: '8px' }}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
