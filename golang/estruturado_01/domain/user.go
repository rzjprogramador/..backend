package domain

import (
	"github.com/asaskevich/govalidator"
	uuid "github.com/satori/go.uuid"
	"golang.org/x/crypto/bcrypt"
	"time"
)

// import (
// 	"github.com/asaskevich/govalidator"
// 	uuid "github.com/satori/go.uuid"
// 	"golang.org/x/crypto/bcrypt"
// 	"time"
// )

type User struct {
	Base     `valid:"required"`
	Name     string `json:"name" gorm:"type:varchar(255)" valid:"notnull"`
	Email    string `json:"email" gorm:"type:varchar(255);unique_index" valid:"notnull,email"`
	Password string `json:"-" gorm:"type:varchar(255)" valid:"notnull"`
	Token    string `json:"token" gorm:"type:varchar(255);unique_index" valid:"notnull,uuid"`
}

func NewUser() *User{
	return &User{}
}

func (user *User) Prepare() error{
	password, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)

	if err != nil {
		return err
	}

	user.ID = uuid.NewV4().String()
	user.CreatedAt = time.Now()
	user.Password = string(password)
	user.Token = uuid.NewV4().String()

	err = user.validate()

	if err != nil {
		return err
	}

	return nil
}

func (user *User) validate() error{
	return nil
}