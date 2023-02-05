from typing import Optional
from odmantic import Field, Model


class Publisher(Model):
    name: str
    founded: int = Field(ge=1440)
    location: Optional[str] = None

