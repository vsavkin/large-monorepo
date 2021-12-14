import { render } from '@testing-library/react';

import Dialog61 from './dialog61';

describe('Dialog61', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog61 />);
    expect(baseElement).toBeTruthy();
  });
});
