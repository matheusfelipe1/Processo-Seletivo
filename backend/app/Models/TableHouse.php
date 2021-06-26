<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TableHouse extends Model
{
    use HasFactory;
    protected $fillable = [

        "cep",
        "endereco",
        "cidade",
        "estado",
        "residencial",
        "descricao",
        "endereco_empresa",
        "uf_empresa",
        "bairro_empresa",
        "cidade_empresa",
        "cep_empresa",
        "bairro",
        "complemento",
        "preco",
        "preco_aluguel",
        "cnpj",
        "contato",
        "email"
    ];
    public $timestamps = false;
}
