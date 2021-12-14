import { render } from '@testing-library/react';

import ImportantComponent150 from './important-component-150';

describe('ImportantComponent150', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent150 />);
    expect(baseElement).toBeTruthy();
  });
});
