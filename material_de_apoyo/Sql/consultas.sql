/* Consultar las entregas por material*/


-- SELECT M.descripcion, COUNT(*) as 'Numero de entregas'/*el asterisco es para contar tambien valores nulos y as es para renombrar (as 'nombre') */
-- FROM materiales M, entregan E
-- WHERE m.clave = E.clave
-- GROUP BY M.descripcion
-- ORDER BY COUNT(*) DESC


/*
 Condiciones sobre funciones agregadas
__ NUnca en el where
______Siempre en el Having
*/

-- SELECT M.descripcion, COUNT(*) as 'Numero de entregas'/*el asterisco es para contar tambien valores nulos y as es para renombrar (as 'nombre') */
-- FROM materiales M, entregan E
-- WHERE m.clave = E.clave
-- GROUP BY M.descripcion
-- HAVING COUNT(*) >= 4
-- ORDER BY COUNT(*) DESC


SELECT M.descripcion,Sum cantidad(*) as 'Numero de entregas'/*el asterisco es para contar tambien valores nulos y as es para renombrar (as 'nombre') */
FROM materiales M, entregan E
WHERE m.clave = E.clave
GROUP BY M.descripcion
HAVING COUNT(*) >= 4
ORDER BY COUNT(*) DESC







-- Subconsultas 56


-- descripcion de los materiales que no fueron entregados

SELECT descripcion
FROM material M , entregan E
where M.clave <> E.clave





