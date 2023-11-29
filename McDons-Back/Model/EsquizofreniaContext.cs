using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace McDons_Back.Model;

public partial class EsquizofreniaContext : DbContext
{
    public EsquizofreniaContext()
    {
    }

    public EsquizofreniaContext(DbContextOptions<EsquizofreniaContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Imagem> Imagems { get; set; }

    public virtual DbSet<Pedido> Pedidos { get; set; }

    public virtual DbSet<Produto> Produtos { get; set; }

    public virtual DbSet<ProdutoPedido> ProdutoPedidos { get; set; }

    public virtual DbSet<Promocao> Promocaos { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Data Source=CT-C-001YR\\SQLEXPRESS;Initial Catalog=Esquizofrenia;Integrated Security=True;TrustServerCertificate=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Imagem>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Imagem__3214EC2744122EA6");

            entity.ToTable("Imagem");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Foto).IsRequired();
        });

        modelBuilder.Entity<Pedido>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Pedido__3214EC27DE98298F");

            entity.ToTable("Pedido");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Cliente)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Produto>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Produto__3214EC2737B50EF0");

            entity.ToTable("Produto");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Descricao)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.ImagemId).HasColumnName("ImagemID");
            entity.Property(e => e.Nome)
                .HasMaxLength(100)
                .IsUnicode(false);

            entity.HasOne(d => d.Imagem).WithMany(p => p.Produtos)
                .HasForeignKey(d => d.ImagemId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Produto__ImagemI__3B75D760");
        });

        modelBuilder.Entity<ProdutoPedido>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__ProdutoP__3214EC2723186E24");

            entity.ToTable("ProdutoPedido");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.PedidoId).HasColumnName("PedidoID");
            entity.Property(e => e.ProdutoId).HasColumnName("ProdutoID");

            entity.HasOne(d => d.Pedido).WithMany(p => p.ProdutoPedidos)
                .HasForeignKey(d => d.PedidoId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__ProdutoPe__Pedid__440B1D61");

            entity.HasOne(d => d.Produto).WithMany(p => p.ProdutoPedidos)
                .HasForeignKey(d => d.ProdutoId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__ProdutoPe__Produ__4316F928");
        });

        modelBuilder.Entity<Promocao>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Promocao__3214EC27B80C66D1");

            entity.ToTable("Promocao");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.ProtudoId).HasColumnName("ProtudoID");

            entity.HasOne(d => d.Protudo).WithMany(p => p.Promocaos)
                .HasForeignKey(d => d.ProtudoId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Promocao__Protud__3E52440B");
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Usuario__3214EC2727A9297F");

            entity.ToTable("Usuario");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Nome)
                .IsRequired()
                .HasMaxLength(80)
                .IsUnicode(false);
            entity.Property(e => e.Salt)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.Senha)
                .IsRequired()
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
