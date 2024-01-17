import React, { useRef,useState } from 'react';
import Header from './Header';
import Crud from './Crud';
import { Toast } from 'primereact/toast';
import { Dialog } from 'primereact/dialog';

export default function Categorie() {
  const toast = useRef(null);
  const [visible, setVisible] = useState(false);

  const showSuccess = () => {
      toast.current.show({severity:'success', summary: 'Success', detail:'Ajouter avec succes', life: 3000});
  }

  const showError = () => {
    toast.current.show({severity:'error', summary: 'Error', detail:'Element Supprimer', life: 3000});
}

  return (
    <>
    <Header/>
    <Toast ref={toast} position="top-center" />

    <Dialog header="Header" visible={visible} style={{ width: '40vw' }} onHide={() => setVisible(false)}>
      <div className="m-0">
        <h1 className='text-center' >Modification d'un elements</h1>
        <form class="">
          <div class="form-floating mb-3">
            <input type="text" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Categorie:</label>
          </div>
          <div className='text-center' >
          <button class="w-50 mb-2 btn btn-lg rounded-3 btn-warning" type="submit"><i className='fas fa-pen' ></i>Modifier</button>
          </div>
        </form>
      </div>
    </Dialog>

    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9">
          <div className='container'>
          <h1 className="text-start">Gestion des Categories:</h1>
          <div className="row">
            
            <form className="mb-3">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Nouvelle Catégorie" />
                <button type="button" className="btn btn-primary" onClick={showSuccess} ><i className='fas fa-plus' ></i> Ajouter</button>
              </div>
            </form>

            <table className='table table-sm table-borderless text-center' >
              <thead className='table-dark' >
                <tr>
                  <th>code Categorie</th>
                  <th>catgorie</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className='table-striped' >
                <tr>
                  <th>1</th>
                  <th>ggh</th>
                  <th><button className='btn btn-warning w-25' onClick={() => setVisible(true)} ><i className='fas fa-pen' ></i> Modifier</button>  <button className='btn btn-danger w-25' onClick={showError} ><i className='fas fa-trash-alt' ></i> Supprimer</button></th>
                </tr>
                
              </tbody>
            </table>

          </div>
          </div>
        </div>
        
        <Crud/>
      </div>
    </div>
    </>
  );
}

