import { render } from '@testing-library/react';

import Dialog74 from './dialog74';

describe('Dialog74', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog74 />);
    expect(baseElement).toBeTruthy();
  });
});
