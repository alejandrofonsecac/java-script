function excluirTarefa(elemento) {
    const closeContainerList = elemento.closest('.item_da_Lista');
    closeContainerList.remove();
}