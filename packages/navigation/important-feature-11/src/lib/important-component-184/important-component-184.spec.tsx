import { render } from '@testing-library/react';

import ImportantComponent184 from './important-component-184';

describe('ImportantComponent184', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent184 />);
    expect(baseElement).toBeTruthy();
  });
});
