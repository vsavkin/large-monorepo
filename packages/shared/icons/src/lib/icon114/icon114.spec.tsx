import { render } from '@testing-library/react';

import Icon114 from './icon114';

describe('Icon114', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon114 />);
    expect(baseElement).toBeTruthy();
  });
});
