import EnhancedTable from './EnhancedTableHead.jsx';

function Medidor() {
  return (
    <div className="bg-blue-gray-300 flex flex-col min-h-screen">
      <nav className='bg-light-green-700 w-full p-4'>
        hola
      </nav>
      <div className="flex justify-between items-center px-4 mt-16">
        <h1 className="text-2xl ml-4">Mis dispositivos</h1>
        <div>
          <button  className='bg-teal-700 mr-4'>Agregar un dispositivo</button>
          <button className='bg-teal-700 mr-4'>Mi último consumo</button>
        </div>
      </div>
      <div className="flex-grow mx-6 my-6">
        <EnhancedTable />
        <button className='ml-2 bg-deep-orange-500'>calcular mi consumo</button>
      </div>
      </div>
  )
}
export default Medidor;
