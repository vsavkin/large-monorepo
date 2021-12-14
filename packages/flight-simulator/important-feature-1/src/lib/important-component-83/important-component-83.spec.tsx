import { render } from '@testing-library/react';

import ImportantComponent83 from './important-component-83';

describe('ImportantComponent83', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent83 />);
    expect(baseElement).toBeTruthy();
  });
});
