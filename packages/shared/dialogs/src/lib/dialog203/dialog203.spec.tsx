import { render } from '@testing-library/react';

import Dialog203 from './dialog203';

describe('Dialog203', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog203 />);
    expect(baseElement).toBeTruthy();
  });
});
