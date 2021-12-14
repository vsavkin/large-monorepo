import { render } from '@testing-library/react';

import Dialog11 from './dialog11';

describe('Dialog11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog11 />);
    expect(baseElement).toBeTruthy();
  });
});
