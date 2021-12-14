import { render } from '@testing-library/react';

import Dialog51 from './dialog51';

describe('Dialog51', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog51 />);
    expect(baseElement).toBeTruthy();
  });
});
