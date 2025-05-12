# Fan trap pattern

It is a number of `M:M` relationships resolved with a common intersection entity.

A Fan Trap (named after the characteristic shape of the solution) occurs when three or more entities are related through `M:M` relationships and form a ring. Usually, you should replace the relationhships with a central entity having several `M:1` relationships.

Preventing a fan trap is similar to resolving a `M:M` relationship between two entities.

Resolving the three `M:M` relationships results in three intersection entities, _AB_ _BC_, and _AC_. These will contain related pairs. Joining _AB_ and _BC_ may, however, result in information that is different from what _AC_ contains.

Note that there are various ways of avoiding the trap, as shown in the illustration. All can be correct depending on the context.

![Examples](images/fan%20trap.JPG)
