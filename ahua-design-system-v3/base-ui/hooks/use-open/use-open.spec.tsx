import { renderHook, act } from '@testing-library/react-hooks';
import { useOpen } from './use-open';

it('should increment counter', () => {
  const { result } = renderHook(() => useOpen());
  expect(result.current.isOpen).toBeFalsy();
  act(() => {
    result.current.toggleOpen();
  });
  expect(result.current.isOpen).toBeTruthy();
});
