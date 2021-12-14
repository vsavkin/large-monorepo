import { render } from '@testing-library/react';

import ImportantComponent22 from './important-component-22';

describe('ImportantComponent22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent22 />);
    expect(baseElement).toBeTruthy();
  });
});
