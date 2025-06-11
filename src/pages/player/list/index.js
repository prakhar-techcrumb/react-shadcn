import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Copy } from "lucide-react";
import { Input } from "@/components/ui/input";
import { DataTable } from "@/components/shared/DataTable";
import { Header } from "@/components/shared/Header";
import { Dropdown } from "@/components/shared/Dropdown";
import { Button } from "@/components/ui/button";

const playerData = [
  {
    id: "1",
    name: "Test player edit alert edit",
    status: "enabled",
    dateCreated: new Date("2025-06-04"),
    size: "16:9",
    autoplay: false,
  },
  {
    id: "2", 
    name: "2956 Player",
    status: "enabled",
    dateCreated: new Date("2025-05-26"),
    size: "16:9",
    autoplay: true,
  },
  {
    id: "3",
    name: "player on qa edit",
    status: "enabled",
    dateCreated: new Date("2025-05-15"),
    size: "16:9",
    autoplay: true,
  },
  {
    id: "4",
    name: "System alert Mail for Player",
    status: "enabled",
    dateCreated: new Date("2025-05-08"),
    size: "16:9",
    autoplay: false,
  },
  {
    id: "5",
    name: "2930 Player audit",
    status: "enabled",
    dateCreated: new Date("2025-05-07"),
    size: "640 X 360",
    autoplay: true,
  },
  {
    id: "6",
    name: "(DEFAULT) Copy Of Audit Log copy json",
    status: "enabled",
    dateCreated: new Date("2025-04-29"),
    size: "16:9",
    autoplay: false,
  },
  {
    id: "7",
    name: "Audit Log copy",
    status: "enabled",
    dateCreated: new Date("2025-04-29"),
    size: "16:9",
    autoplay: false,
  },
  {
    id: "8",
    name: "2804 Toast 5 sec Test",
    status: "enabled",
    dateCreated: new Date("2025-04-15"),
    size: "16:9",
    autoplay: false,
  },
  {
    id: "9",
    name: "Copy Of 9 jan",
    status: "enabled",
    dateCreated: new Date("2025-04-02"),
    size: "16:9",
    autoplay: true,
  },
  {
    id: "10",
    name: "26 March Player",
    status: "enabled",
    dateCreated: new Date("2025-03-26"),
    size: "16:9",
    autoplay: true,
  },
    {
    id: "11",
    name: "2804 Toast 5 sec Test",
    status: "enabled",
    dateCreated: new Date("2025-04-15"),
    size: "16:9",
    autoplay: false,
  },
  {
    id: "12",
    name: "Copy Of 9 jan",
    status: "enabled",
    dateCreated: new Date("2025-04-02"),
    size: "16:9",
    autoplay: true,
  },
  {
    id: "13",
    name: "26 March Player",
    status: "enabled",
    dateCreated: new Date("2025-03-26"),
    size: "16:9",
    autoplay: true,
  },
];

export default function PlayerList() {
  const [organizations] = useState(playerData);

  // Search and filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [columnFilters, setColumnFilters] = useState([]);


  // Debounced search effect
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setColumnFilters((prev) => {
        const filtered = prev.filter((filter) => filter.id !== "name");
        return searchQuery ? [...filtered, { id: "name", value: searchQuery }] : filtered;
      });
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);


  // Define columns for the organizations data table
  const columns = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>,
    },
    {
      accessorKey: "dateCreated",
      header: "Created On",
      cell: ({ row }) => {
        return <div>{format(row.getValue("dateCreated"), "dd-MMM-yyyy")}</div>;
      },
    },
    {
      accessorKey: "size",
      header: "Size",
      cell: ({ row }) => <div>{row.getValue("size")}</div>,
    },
    {
      accessorKey: "autoplay",
      header: "Autoplay",
      cell: ({ row }) => {
        // Default to False if autoplay is not set
        const autoplay = row.original.autoplay === true;
        return <div>{autoplay ? "True" : "False"}</div>;
      },
    },
    {
      accessorKey: "copy",
      header: "Copy",
      cell: () => (
        <Button variant="ghost">
          <Copy className="w-4 h-4 cursor-pointer" />
        </Button>
      ),
    },
    {
      id: "options",
      header: "Options",
      cell: ({ row }) => {
        const player = row.original;
        return (
          <Dropdown
            actions={[
              { label: "New Tab", onClick: () => console.log(`New Tab for ${player.name}`) },
              { label: "Copy To Org", onClick: () => console.log(`Copy To Org for ${player.name}`) },
              { label: "JSON Edit", onClick: () => console.log(`JSON Edit for ${player.name}`) },
              { label: "Mark as Default", onClick: () => console.log(`Mark as Default for ${player.name}`) },
            ]}
          />
        );
      },
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <Header
        title="Players" 
        breadcrumbs={[
          { name: "Players", href: "/" },
          { name: "List", href: "/" }
        ]}
        actionButton={{
          label: "New Player +",
          onClick: () => {
            console.log("Create organization");
          }
        }}
      />
        <div className="flex justify-end">
          <div className="flex items-center gap-2">
            <Input
              placeholder="Search Players..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-sm"
            />
          </div>
        </div>
        <DataTable
          columns={columns}
          data={organizations}
          columnFilters={columnFilters}
          setColumnFilters={setColumnFilters}
        />
      </div>
  );
}