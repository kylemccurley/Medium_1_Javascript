(false && undefined); 
(false || undefined);
((false && undefined) || (false || undefined));
((false || undefined) || (false && undefined));
((false && undefined) && (false || undefined));
((false || undefined) && (false && undefined));
('a' || (false && undefined) || '');
((false && undefined) || 'a' || '');
('a' && (false || undefined) && '');
((false || undefined) && 'a' && '');

/*
Predictions:
1. False
2. Undefined
3. Undefined
4. False
5. False
6. Undefined
7. 'a'
8. 'a'
9. Undefined
10. Undefined
*/

('a' || (false && undefined) || '');
