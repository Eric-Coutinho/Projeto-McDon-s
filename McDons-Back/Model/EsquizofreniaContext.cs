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
        => optionsBuilder.UseSqlServer("Data Source=CT-C-001YN\\SQLEXPRESS;Initial Catalog=Esquizofrenia;Integrated Security=True;TrustServerCertificate=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Imagem>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Imagem__3214EC27F1DDE68D");

            entity.ToTable("Imagem");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Foto).IsRequired();
        });

        modelBuilder.Entity<Pedido>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Pedido__3214EC2703BB8153");

            entity.ToTable("Pedido");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Cliente)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Produto>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Produto__3214EC278DD0BABD");

            entity.ToTable("Produto");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Descricao)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.ImagemId).HasColumnName("ImagemID");
            entity.Property(e => e.Nome)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Tipo)
                .IsRequired()
                .HasMaxLength(80)
                .IsUnicode(false);

            entity.HasOne(d => d.Imagem).WithMany(p => p.Produtos)
                .HasForeignKey(d => d.ImagemId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Produto__ImagemI__286302EC");
        });

        modelBuilder.Entity<ProdutoPedido>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__ProdutoP__3214EC2724CC5ACE");

            entity.ToTable("ProdutoPedido");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.PedidoId).HasColumnName("PedidoID");
            entity.Property(e => e.ProdutoId).HasColumnName("ProdutoID");

            entity.HasOne(d => d.Pedido).WithMany(p => p.ProdutoPedidos)
                .HasForeignKey(d => d.PedidoId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__ProdutoPe__Pedid__30F848ED");

            entity.HasOne(d => d.Produto).WithMany(p => p.ProdutoPedidos)
                .HasForeignKey(d => d.ProdutoId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__ProdutoPe__Produ__300424B4");
        });

        modelBuilder.Entity<Promocao>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Promocao__3214EC27048B2B7C");

            entity.ToTable("Promocao");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.ProtudoId).HasColumnName("ProtudoID");

            entity.HasOne(d => d.Protudo).WithMany(p => p.Promocaos)
                .HasForeignKey(d => d.ProtudoId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Promocao__Protud__2B3F6F97");
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Usuario__3214EC2797EB936C");

            entity.ToTable("Usuario");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Nome)
                .IsRequired()
                .HasMaxLength(80)
                .IsUnicode(false);
            entity.Property(e => e.Salt)
                .IsRequired()
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
