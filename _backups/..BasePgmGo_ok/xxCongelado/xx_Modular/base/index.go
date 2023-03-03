package base

import "BasePgmGo/utils"

type BaseModel struct {
	BasePossiveis
}

type BasePossiveis struct {
	ComentarioEmLinha string
	ComentarioEmVariasLinhas string
}

func newBase(b BaseModel) *BaseModel{
	return &b
}

func ExecuteBase() {
	baseGolang := newBase(Obj_Base_Golang)
	baseLua := newBase(Obj_Base_Lua)
	
	utils.ShowObject(baseGolang)
	utils.ShowObject(baseLua)
}