using System;
using System.Collections.Generic;

namespace McDons_Back.Model;

public partial class Promocao
{
    public int Id { get; set; }

    public double Preco { get; set; }

    public int ProtudoId { get; set; }

    public virtual Produto Protudo { get; set; }
}
