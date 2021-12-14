import { render } from '@testing-library/react';

import Dialog198 from './dialog198';

describe('Dialog198', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog198 />);
    expect(baseElement).toBeTruthy();
  });
});
