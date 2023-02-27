package domain

import (
	"github.com/asaskevich/govalidator"
	"time"
)
// import (
// 	"github.com/asaskevich/govalidator"
// 	"time"
// )

// func init() {
// 	govalidator.SetFieldsRequiredByDefault(true)
// }

type Base struct {
	ID        string     `json:"id" gorm:"type:uuid;primary_key" valid:"uuid"`
	CreatedAt time.Time `json:"created_at" valid:"-"`
	UpdatedAt time.Time `json:"updated_at" valid:"-"`
	//DeletedAt time.Time `json:"deleted_at" valid:"-" sql:"index"`
}

// Quando criar o User o base ja vai setar os registros de hora das criacoes e o id com uuid
