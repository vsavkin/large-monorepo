import { render } from '@testing-library/react';

import Icon175 from './icon175';

describe('Icon175', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon175 />);
    expect(baseElement).toBeTruthy();
  });
});
