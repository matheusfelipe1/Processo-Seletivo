<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableHouses extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('table_houses', function (Blueprint $table) {
            $table->bigIncrements('id')->notNull();
            $table->string('endereco', 60)->notNull();
            $table->string('cidade', 20)->notNull();
            $table->string('residencial')->notNull();
            $table->string('descricao', 1000)->notNull();
            $table->string('estado')->notNull();
            $table->string('bairro')->notNull();
            $table->string('preco')->notNull();
            $table->string('preco_aluguel')->notNull();
            $table->string('endereco_empresa')->notNull();
            $table->string('cep_empresa')->notNull();
            $table->string('uf_empresa')->notNull();
            $table->string('cidade_empresa')->notNull();
            $table->string('bairro_empresa')->notNull();
            $table->string('cep')->notNull();
            $table->string('cnpj')->notNull();
            $table->string('contato')->notNull(); //telefone de contato da empresa
            $table->string('email')->notNull(); //e-mail da empresa
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('table_houses');
    }
}
