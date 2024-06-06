from domain import Lesson, TimeTable, generate_problem
from constraints import define_constraints
import optapy.config
from optapy.types import Duration
from optapy import solver_factory_create


solver_config = optapy.config.solver.SolverConfig() \
    .withEntityClasses(Lesson) \
    .withSolutionClass(TimeTable) \
    .withConstraintProviderClass(define_constraints) \
    .withTerminationSpentLimit(Duration.ofSeconds(30))



solution = solver_factory_create(solver_config) \
    .buildSolver() \
    .solve(generate_problem())

print(solution)