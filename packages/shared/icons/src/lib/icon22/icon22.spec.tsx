import { render } from '@testing-library/react';

import Icon22 from './icon22';

describe('Icon22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon22 />);
    expect(baseElement).toBeTruthy();
  });
});
