import strawberry
from app.backend.graphql.queries import Query
from app.backend.graphql.mutations import Mutation

schema = strawberry.Schema(query=Query, mutation=Mutation)
