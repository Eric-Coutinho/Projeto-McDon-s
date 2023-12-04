using System;
using System.Collections.Generic;

namespace McDons_Back.Model;

public partial class Produto
{
    public int Id { get; set; }

    public string Nome { get; set; }

    public string Tipo { get; set; }

    public double Preco { get; set; }

    public string Descricao { get; set; }

    public int? ImagemId { get; set; }

    public virtual Imagem Imagem { get; set; }

    public virtual ICollection<ProdutoPedido> ProdutoPedidos { get; } = new List<ProdutoPedido>();

    public virtual ICollection<Promocao> Promocaos { get; } = new List<Promocao>();
}
