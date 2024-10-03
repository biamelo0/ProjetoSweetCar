function ModalCard(){
    Swal.fire({
        title: "Item adicionado ao carrinho !",
        text: "Clique para continuar",
        icon: "success"
      });
}

function ModalCarrinho(){

        Swal.fire({
            title: "Deseja finalizar sua compra?",
            text: "Selecione uma alternativa !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Finalizar"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Compra finalizada!",
                text: "Sua compra foi finalizada com sucesso",
                icon: "success"
              });
            }
          });
    
}
