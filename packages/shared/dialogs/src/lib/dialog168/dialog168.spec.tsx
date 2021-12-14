import { render } from '@testing-library/react';

import Dialog168 from './dialog168';

describe('Dialog168', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog168 />);
    expect(baseElement).toBeTruthy();
  });
});
