
import Admin from '@/Admin/Admin';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
type Props = {

};
const AdminRouters:React.FC<Props> = () => {
  return (
    <div>
        <Routes>
            <Route path = '/*' element= { <Admin/> } > </Route>
        </Routes>
    </div>
  );
};

export default AdminRouters;