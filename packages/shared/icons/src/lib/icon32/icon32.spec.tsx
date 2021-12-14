import { render } from '@testing-library/react';

import Icon32 from './icon32';

describe('Icon32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon32 />);
    expect(baseElement).toBeTruthy();
  });
});
