using System;
using System.Collections.Generic;

namespace McDons_Back.Model;

public partial class Pedido
{
    public int Id { get; set; }

    public int Numero { get; set; }

    public string Cliente { get; set; }

    public bool Finalizado { get; set; }

    public bool Entregue { get; set; }

    public virtual ICollection<ProdutoPedido> ProdutoPedidos { get; } = new List<ProdutoPedido>();
}
