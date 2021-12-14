import { render } from '@testing-library/react';

import ImportantComponent63 from './important-component-63';

describe('ImportantComponent63', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent63 />);
    expect(baseElement).toBeTruthy();
  });
});
