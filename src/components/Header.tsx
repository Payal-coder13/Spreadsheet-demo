import { PanelRight, Search, BellDotIcon, CircleUser} from 'lucide-react'

const Header = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 mb- bg-white  shadow-sm border-1 border-gray-200">
       <div className="flex items-center gap-3">
        <PanelRight className="text-sm text-green-800 gap-3 "/>
        <p className='text-sm text-gray-400 hover:text-black mx-3 '>Workspace</p>
        <p className='text-sm text-gray-400'>{">"}</p>
        <p className='text-sm text-gray-400 hover:text-black mx-3 '>Folder 2</p>
        <p className='text-sm text-gray-400'>{">"}</p>
        <p className='text-sm text-black hover:text-black mx-3 '>Spreadsheet 3</p>
       </div>
       <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded">
          <Search className="text-sm" />
          Search within sheet
        </button>
        <BellDotIcon className='text-sm mx-2'/>
        <button className="flex items-center gap-2 text-sm text-gray-700  hover:text-gray-900 px-3 py-1.5 rounded">
          <CircleUser className="text-sm" />
          John Doe
        </button>
       </div>
    </div>
  )
}

export default Header