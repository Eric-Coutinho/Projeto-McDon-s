using System;
using System.Collections.Generic;

namespace McDons_Back.Model;

public partial class ProdutoPedido
{
    public int Id { get; set; }

    public int ProdutoId { get; set; }

    public int PedidoId { get; set; }

    public virtual Pedido Pedido { get; set; }

    public virtual Produto Produto { get; set; }
}
