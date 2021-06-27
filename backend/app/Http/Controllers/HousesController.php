<?php

namespace App\Http\Controllers;

use App\Models\TableHouse;
use Illuminate\Http\Request;


class HousesController extends Controller
{
    public function store (Request $request)
    {
        $insert = TableHouse::create($request->all());
        return $insert;
        // aqui estou inserindo os dados da minha requisição dentro de banco de dados através do model
    }


    public function create ()
    {
        $houses = TableHouse::all();
        return response()->json($houses);
        // aqui estou buscando um array contendo todos os dados do banco através do model
    }


    public function show (int $id)
    {
        $house = TableHouse::find($id);
        return response()->json($house);
        // aqui estou buscando apenas um conjunto de dados do banco, através de uma requisição que foi enviada ao banco
    }


    public function update (Request $request, int $id)
    {
        $houseUpdated = TableHouse::where(['id' => $id])->update($request->all());
        return $houseUpdated;
        // este algoritmo atualizo dados do banco pela requisição que foi enviada contendo os valores e o ID
    }


    public function destroy (int $id)
    {
        $housesDeleted = TableHouse::where(['id' => $id])->delete();
        return $housesDeleted;
        // este algoritmo eu removo um conjunto de dados do banco através de uma requisição que foi enviada contendp o ID
    }
}
