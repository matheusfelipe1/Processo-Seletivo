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
    }


    public function create ()
    {
        $houses = TableHouse::all();
        return response()->json($houses);
    }


    public function show (int $id)
    {
        $house = TableHouse::find($id);
        return response()->json($house);
    }


    public function update (Request $request, int $id)
    {
        $houseUpdated = TableHouse::where(['id' => $id])->update($request->all());
        return $houseUpdated;
    }


    public function destroy (int $id)
    {
        $housesDeleted = TableHouse::where(['id' => $id])->delete();
        return $housesDeleted;
    }
}
