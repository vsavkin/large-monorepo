import { render } from '@testing-library/react';

import Dialog215 from './dialog215';

describe('Dialog215', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog215 />);
    expect(baseElement).toBeTruthy();
  });
});
