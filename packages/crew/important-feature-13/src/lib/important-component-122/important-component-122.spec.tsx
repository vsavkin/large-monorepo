import { render } from '@testing-library/react';

import ImportantComponent122 from './important-component-122';

describe('ImportantComponent122', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent122 />);
    expect(baseElement).toBeTruthy();
  });
});
