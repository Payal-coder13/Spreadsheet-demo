import React from "react";
import {ArrowDownToLine, ArrowUpToLine, Share2 ,ChevronsRight,EyeOff,ArrowUpDown,ListFilter,UnfoldVertical, CirclePlus} from "lucide-react"


const Toolbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 mb- bg-white  shadow-sm">
      {/* Left: Table Title */}
      <div className="flex items-center gap-3">
      <button className="flex items-center gap-2 text-sm text-gray-700  hover:bg-gray-100 px-3 py-1.5 rounded">
        <ChevronsRight className="text-sm"/>
        Tool bar
      </button>
      <button className="flex items-center gap-2 text-sm text-gray-700  hover:bg-gray-100 px-3 py-1.5 rounded">
        <EyeOff className="text-sm"/>
        Hide fields
      </button>
      <button className="flex items-center gap-2 text-sm text-gray-700  hover:bg-gray-100 px-3 py-1.5 rounded">
        <ArrowUpDown className="text-sm"/>
        Sort
      </button>
      <button className="flex items-center gap-2 text-sm text-gray-700 hover:bg-gray-100 px-3 py-1.5 rounded">
        <ListFilter className="text-sm"/>
        Filter
      </button>
      <button className="flex items-center gap-2 text-sm text-gray-700 hover:bg-gray-100 px-3 py-1.5 rounded">
        <UnfoldVertical className="text-sm"/>
        Cell view
      </button>
      </div>


      {/* Right: Action Buttons */}
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 text-sm text-gray-700  hover:bg-gray-100 px-3 py-1.5 rounded border-1 border-gray-200">
          <ArrowDownToLine className="text-sm" />
          Import
        </button>
        <button className="flex items-center gap-2 text-sm text-gray-700 hover:bg-gray-100 px-3 py-1.5 rounded border-1 border-gray-200">
          <ArrowUpToLine className="text-sm" />
          Export
        </button>
        <button className="flex items-center gap-2 text-sm text-gray-700 hover:bg-gray-100 px-3 py-1.5 rounded border-1 border-gray-200">
          <Share2 className="text-sm" />
          Share
        </button>
        <button
    className="flex items-center gap-2 text-sm text-white bg-green-800 hover:bg-green-900 px-4 py-1.5 rounded"
  >
    <CirclePlus className="text-sm" />
    New action
  </button>
      </div>
    </div>
  );
};

export default Toolbar;
